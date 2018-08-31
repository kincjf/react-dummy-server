"use strict";

let Fund = require('Fund');

var data = [
	{
		"id": "1",
		"$class": "org.hyperledger.fundnetwork.PostOffice",
		"participantKey": "1",
		"contact": {
			"$class": "org.hyperledger.fundnetwork.Contact",
			"name": "전주 금암동 우체국",
			"email": "postoffice1@koreapost.kr",
			"address": "전북 전주시 덕진구 금암동 215-84",
			"phone": "063-774-8642",
			"sex": "none",
			"age": 25
		},
		"sellableFund": []		// Fund에 존재는 정보이어야 한다
	},
	{
		"id": "2",
		"$class": "org.hyperledger.fundnetwork.PostOffice",
		"participantKey": "2",
		"contact": {
			"$class": "org.hyperledger.fundnetwork.Contact",
			"name": " 완주 이서 우체국",
			"email": "postoffice2@koreapost.kr",
			"address": "완주군 이서면 상개리 560-6",
			"phone": "063-257-4895",
			"sex": "none",
			"age": 20
		},
		"sellableFund": []		// Fund에 존재는 정보이어야 한다
	}
];

_.forEach(data, function(value, key, that) {
	_.forEach(Fund, function(value, key) {
		that[key].sellableFund.push(value.fundNameKey);
	});
});

module.exports = data;
