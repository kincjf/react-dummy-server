"use strict";

const _ = require("lodash");
const moment = require("moment");

// let customerData = require("./Customer");
let fundData = require("./Fund");
let guildData = require("./Guild");

/**
 * FundLogs에서 기록-추적해야하는 로그
 * 1. 길드의 펀드 가입일(X, fund[n].startedAt에 있음)
 * 2. 월별, 주별, 일별 요청 기록 => 일단 일별로 작성함
 *    요청 종류: 출자금 증액 / 지출, (정기)수익지급  
 * 3. 모임금 수익은 임의로 입력함
 */

var data = [
	// 예시 데이터, 모든 로그는 자동으로 생성됨
	// {
	// 	"$class": "org.hyperledger.fundnetwork.FundLogs",
	// 	"id": "1",
	// 	"customerIdKey": "string",
	// 	"guildIdKey": "string",
	// 	"fundIdKey": "string",
	// 	"transactionMoney": "string",
	// 	"date": "2018-08-31T15:51:30.034Z",
	// 	"behavior": "string",
	// 	"additionalJsonValue": "string"
	// }
];

let fundLogId = 0;
let dayOfyear = 7;
// let dayOfyear = Math.floor(365/3);

let day = 0;

let behaviorType = ["출자금증액", "지출", "수익지급"];  // "수익발생은 별도 입력"
// 2. FundLogs의 behavior event 발생별 소속 길드원(Customer)의 동의 여부
// 모든 FundLog에 대해서 길드 참여자의 동의여부를 파악해야함
_.forEach(fundData, function(fund, fundKey, fundThat) {
	for (let i = 0; i < dayOfyear; i++) {
		let inputDate = moment(fund.startedAt).utc().dayOfYear(day++).format();
		let behavior = behaviorType[_.random(0,5)%3];

		let guild = _.find(guildData, function(o) { return o.id === fund.guildIdKey; });
		let customerId = _.shuffle(guild.guildMemberKeys)[0];
		
		if (behavior == "출자금증액") {
		} else if (behavior == "지출") {
			customerId = guild.guildMasterKey;
		} else {
			// 수익 지급
		}

		data.push({
			"$class": "org.hyperledger.fundnetwork.FundLogs",
			"id": `${++fundLogId}`,
			"customerIdKey": customerId,
			"guildIdKey": fund.guildIdKey,
			"fundIdKey": fund.id,  // 펀드 참여시 작성함 
			"transactionMoney": _.random(10000, 100000000),  // 1만원~1억원
			"date": inputDate,
			"behavior": behavior,
			"additionalJsonValue": ""  // 해당사항 없음
		});
	}
});

day = 0;

// 3. 모임금 수익은 임의로 입력함
_.forEach(fundData, function(fund, fundKey, fundThat) {
	for (let i = 0; i < dayOfyear/3; i++) {
		let incomePeriod = _.random(0, 3);
		let inputDate = moment(fund.startedAt).utc().dayOfYear((day++)+incomePeriod).format();
		let incomeMoney = _.random(10000, 10000000);    // 1만원~1천만원
		
		data.push({
			"$class": "org.hyperledger.fundnetwork.FundLogs",
			"id": `${++fundLogId}`,
			"customerIdKey": "",  // customer와는 별 상관 없음 
			"guildIdKey": fund.guildIdKey,
			"fundIdKey": fund.id,  // 펀드 참여시 작성함 
			"transactionMoney": incomeMoney,  // 1만원~1억원
			"date": inputDate,
			"behavior": "수익발생",
			"additionalJsonValue": ""  // 해당사항 없음
		});
	}
});

module.exports = data;
