"use strict";

const _ = require("lodash");
const moment = require("moment");

let customerData = require("./Customer");
let guildData = require("./Guild");
let fundData = require("./Fund");
let fundLogsData = require("./FundLogs");

/**
 * CustomerLogs에서 기록-추적해야하는 로그
 * 1. 모임 참여자별 가입기간 분포
 * 2. FundLogs의 behavior event 발생별 소속 길드원(Customer)의 동의 여부
 */
var data = [
	// {	// 예시 데이터, 모든 로그는 자동으로 생성됨
	// 	"$class": "org.hyperledger.fundnetwork.CustomerLogs",
	// 	"id": "1",
	// 	"customerIdKey": "string",
	// 	"guildIdKey": "string",
	// 	"fundIdKey": "string",
	// 	"transactionMoney": "string",
	// 	"date": "2018-08-31T15:51:29.980Z",
	// 	"behavior": "string",
	// 	"additionalJsonValue": "string"
	// }
];
let customerLogId = 0;

// 1. 모임(Guild) 참여자 가입기간 분포(탈퇴는 구현하지 않음)
// 모든 참여자는 모든 길드(계, 협동조합)에 가입하는 케이스로 작성
_.forEach(customerData, function(customer, customerKey, customerThat) {
	_.forEach(guildData, function(guild, guildKey, guildThat) {
		let sumDate = _.random(1, 1068);
		let inputDate = moment(guild.startAt).utc().dayOfYear(sumDate).format();

		data.push({
			"$class": "org.hyperledger.fundnetwork.CustomerLogs",
			"id": `${++customerLogId}`,
			"customerIdKey": customer.id,
			"guildIdKey": "string",
			"fundIdKey": "",  // 펀드 참여시 작성함 
			"transactionMoney": "",  // 개인은 금전입출금 권한이 없음
			"date": inputDate,
			"behavior": "길드가입",
			"additionalJsonValue": ""  // 해당사항 없음
		});
	});
});

// 2. FundLogs의 behavior event 발생별 소속 길드원(Customer)의 동의 여부
// 모든 FundLog에 대해서 길드 참여자의 동의여부를 파악해야함
_.forEach(fundLogsData, function(fundLog, fundLogKey, fundLogThat) {
	let guild = _.find(guildData, function(o) { return o.id === fundLog.guildIdKey; });
	let fund = _.find(fundData, function(o) { return o.id === fundLog.fundIdKey; });

	let fundStartedDate = fund.startedAt;
	let ExpiredSumDate = _.random(1, 730);  // +1개월 ~ +24개월
	let agreeValue = !(fundLogKey%2);
	_.forEach(guild.guildMemberKeys, function(customerId, customerIdKey, customerIdThat) {
		data.push({
			"$class": "org.hyperledger.fundnetwork.CustomerLogs",
			"id": `${++customerLogId}`,
			"customerIdKey": customerId,
			"guildIdKey": guild.id,
			"fundIdKey": fundLog.id,  // 펀드 참여시 작성함 
			"transactionMoney": "",  // 개인은 금전입출금 권한이 없음
			"date": moment(fundStartedDate).utc().dayOfYear(ExpiredSumDate).format(),
			"behavior": "동의확인",
			"additionalJsonValue": JSON.stringify({agree: agreeValue})  // 해당 펀드의 안건에 대한 길드원 동의여부 표시
		});
	});
});

module.exports = data;
