"use strict";

const _ = require('lodash');
const moment = require('moment');

let customerData = require('./Customer');

var data = [
	{
		"id": "1",
		"$class": "org.hyperledger.fundnetwork.Guild",
		"contact": {
			"$class": "org.hyperledger.fundnetwork.Contact",
			"name": "오욕계모임",
			"email": "kee1@koreapost.kr",
			"address": "전북 전주시 덕진구 금암동 215-84",
			"phone": "063-774-8642",
			"sex": "male",
			"age": 25
		},
		"startedAt": "2018-08-31T15:51:30.061Z",		// 설립일
		"comment": "최고의 조합입니다.",
		"initialMoney": 10000000,  // 단위: 억
		"currentMoney": 12000000,  // 단위: 억
		"guildMasterKey": "customer{}",
		"guildMemberKeys": []
	},
	{
		"id": "2",
		"$class": "org.hyperledger.fundnetwork.Guild",
		"contact": {
			"$class": "org.hyperledger.fundnetwork.Contact",
			"name": "전주농촌협동조합",
			"email": "postoffice1@koreapost.kr",
			"address": "전북 전주시 덕진구 금암동 215-84",
			"phone": "063-774-8642",
			"sex": "male",
			"age": 20
		},
		"startedAt": "2018-08-31T15:51:30.061Z",		// 설립일
		"comment": "최고~~ 최고짱짱의 조합입니다.",
		"initialMoney": 1000000,  // 단위: 억
		"currentMoney": 1200000,  // 단위: 억
		"guildMasterKey": "customer{}",
		"guildMemberKeys": []
	}
];

// 모든 조합원은 계 또는 협동조합중 하나에 모두 참여한다
// 일단 귀찮으니 대충 하자
_.forEach(customerData, function(customerValue, customerKey, customerThat) {
	if (customerKey%2 == 0) {  // 0, 2, 4, 6, 8, 10
		data[0].guildMemberKeys.push(customerValue.id);

		if (data[0].guildMemberKeys.length == 2) {
			data[0].guildMasterKey = customerValue.id;
		}	
	} else {
		data[1].guildMemberKeys.push(customerValue.id);  // 1, 3, 5, 7, 9, 11
		
		if (data[1].guildMemberKeys.length == 2) {
			data[1].guildMasterKey = customerValue.id;
		}
	}
});

_.forEach(data, function(guildValue, guildKey, guildThat) {
	var startMonth = Math.floor(Math.random() * 48) + 36;  // -36개월~-24개월
	data[guildKey].startedAt = moment.utc().subtract(startMonth, "months").format();
});

module.exports = data;
