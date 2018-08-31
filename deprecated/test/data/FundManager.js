'use strict';

let _ = require('lodash');
let userData = require('./user');
let itemData = require('./item');

// var weaponKeyList = Object.keys(itemData.weapon);
// var armorKeyList = Object.keys(itemData.armor);
// var accessoryKeyList = Object.keys(itemData.accessory);
// var groceriesKeyList = Object.keys(itemData.groceries);
//
// let tengableItemData = {
// 	'weapon': itemData.weapon,
// 	'armor': itemData.armor,
// 	'accessory': itemData.accessory,
// 	'groceries': itemData.groceries
// }
//
// let wearableItemData = {
// 	'weapon': itemData.weapon,
// 	'armor': itemData.armor,
// 	'accessory': itemData.accessory
// }

var data = [
	{
		'id': '1',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '1',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '2',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '2',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '3',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '3',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '4',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '4',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '5',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '5',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '6',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '6',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '7',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '7',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	},
	{
		'id': '8',
		'$class': 'org.hyperledger.fundnetwork.FundManager',
		'participantKey': '8',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '한국자산운용 김선호',
			'email': 'asdf@azsdfasdf.net',
			'address': '서울시 강남구 서북로 123',
			'phone': '02-6663-2488',
			'sex': 'male',
			'age': 34
		},
		'comment': '경력 20년, 금융사관학교 2기 출신 평균 수익률 20%를 자랑하는 전설의 투자자!'
	}
];

module.exports = data;
