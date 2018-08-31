'use strict';

const _ = require('lodash');
const moment = require('moment');

let guildData = require('./Guild');

// 계모임 정보
var data = [
	{
		'id': '1',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '오욕계모임',
		'category': '계',
		'comment': '오인의 욕망 오욕계모임입니다.',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 10,		// 납입횟수, 협동조합같이 정기납입이 없는 경우 입력을 하지 않으면 0으로 입력
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000,		// 현재 순자산 금액 규모
		"guildIdKey": "guildIdKey",
		"comment": "string"
	},
	{
		'id': '2',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '오랑우탄 계모임',
		'category': '계',
		'comment': '다섯명의 사내들의 계모임 ',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 12,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000,		// 현재 순자산 금액 규모
		"guildIdKey": "guildIdKey",
		"comment": "string"
	},
	{
		'id': '3',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '은하계',
		'category': '계',
		'comment': '은하를 모아놓은 계모임 ',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 8,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000,		// 현재 순자산 금액 규모
		"guildIdKey": "guildIdKey",
		"comment": "string"
	},
	{
		'id': '4',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '여운계',
		'category': '계',
		'comment': '여운이 남는 계모임',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 6,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000,		// 현재 순자산 금액 규모
		"guildIdKey": "guildIdKey",
		"comment": "string"
	},
	{
		'id': '5',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '태양계',
		'category': '계',
		'comment': '태양계모임 ',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 20,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000		// 현재 순자산 금액 규모
	},
	{
		'id': '6',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '뿜빠이협동조합',
		'category': '협동조합',
		'comment': '돈모아서 뿜빠이하는모임',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 0,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000		// 현재 순자산 금액 규모
	},
	{
		'id': '7',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '몰빵협동조합',
		'category': '협동조합',
		'comment': '돈모아서 몰빵하는모임',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 0,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000		// 현재 순자산 금액 규모
	},
	{
		'id': '8',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '품앗이협동조합',
		'category': '협동조합',
		'comment': '품앗이모임',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 0,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000		// 현재 순자산 금액 규모
	},
	{
		'id': '9',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '올인협동조합',
		'category': '협동조합',
		'comment': '모두에게 공평하게 올인',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 0,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000		// 현재 순자산 금액 규모
	},
	{
		'id': '10',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '품두레협동조합',
		'category': '협동조합',
		'comment': '품두레모임',
		"startedAt": "2018-08-31T15:51:30.006Z",
		"expiredAt": "2018-08-31T15:51:30.006Z",
		'numOfPayment': 0,		
		'initialTotalPrice': 100000,			// 초기 순자산 금액 규모. 만원단위
		'currentTotalPrice': 500000		// 현재 순자산 금액 규모
	}
];

_.forEach(data, function(fundValue, fundKey, fundThat) {
	_.forEach(guildData, function(guildValue, guildKey, guildThat) {
		if (fundValue.category === "계") {
			data[fundKey].guildIdKey = guildData[0].id;
		} else if (fundValue.category === "협동조합") {
			data[fundKey].guildIdKey = guildData[1].id;	
		}
	});

	var startedMonth = Math.floor(Math.random() * 36) + 24;  // -36개월~-24개월
	var ExpiredSumDate = _.random(1, 12);  // +1개월 ~ +12개월
	data[fundKey].startedAt = moment.utc().subtract(startedMonth, "months").format();
	data[fundKey].expiredAt = moment().utc().dayOfYear(ExpiredSumDate).format();
});

module.exports = data;
