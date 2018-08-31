'use strict';

var moment = require('moment');
var _ = require('lodash');

var data = [
	{
		'id': '1',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '1',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '진사가문아들1',
			'email': 'sinho0689@gmail.com',
			'address': '전북 전주시 덕진구 백제대로 123',
			'phone': '010-1234-5671',
			'sex': 'male',
			'age': 30
		},
		'money': 1000000000,		// 단위: 원
		'estateValue': 200000000		// 단위: 원
	},
	{
		'id': '2',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '2',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '진사가문손자1',
			'email': 'rlatjr1609@gmail.com',
			'address': '전북 전주시 완산구 천잠로 303',
			'phone': '010-9900-5647',
			'sex': 'male',
			'age': 25
		},
		'money': 100000000,		// 단위: 원
		'estateValue': 2000000000		// 단위: 원
	},
	{
		'id': '3',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '3',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '진사가문어머니',
			'email': 'sinho0689@gmail.com',
			'address': '전북 전주시 덕진구 어머니집',
			'phone': '010-1234-5671',
			'sex': 'female',
			'age': 55
		},
		'money': 20000000000,		// 단위: 원
		'estateValue': 300000000		// 단위: 원
	},
	{
		'id': '4',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '4',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '진사가문할머니',
			'email': 'gkfajsl@gmail.com',
			'address': '전북 전주시 덕진구 할머니집',
			'phone': '010-1234-5671',
			'sex': 'female',
			'age': 95
		},
		'money': 20000000,		// 단위: 원
		'estateValue': 100000000		// 단위: 원
	},
	{
		'id': '5',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '5',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '진사가문첫째딸',
			'email': 'imyourdauther@gmail.com',
			'address': '전북 전주시 덕진구 신혼집',
			'phone': '010-9905-**45',
			'sex': 'female',
			'age': 35
		},
		'money': 40000000,		// 단위: 원
		'estateValue': 50000000		// 단위: 원
	},
	{
		'id': '6',		// 일반 투자자임
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '6',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '일반투자자',
			'email': 'normal@gmail.com',
			'address': '전북 전주시 덕진구 백제대로 563 전북대학교 공과대학 연구실',
			'phone': '010-1234-5671',
			'sex': 'male',
			'age': 30
		},
		'money': 1000000,		// 단위: 원
		'estateValue': 0		// 단위: 원
	},
	{
		'id': '7',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '7',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '부농가문아들1',
			'email': 'sinho0689@gmail.com',
			'address': '전북 전주시 덕진구 백제대로 123',
			'phone': '010-1234-5671',
			'sex': 'male',
			'age': 30
		},
		'money': 1000000000,		// 단위: 원
		'estateValue': 200000000		// 단위: 원
	},
	{
		'id': '8',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '8',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '부농가문손자1',
			'email': 'rlatjr1609@gmail.com',
			'address': '전북 전주시 완산구 천잠로 303',
			'phone': '010-9900-5647',
			'sex': 'male',
			'age': 25
		},
		'money': 100000000,		// 단위: 원
		'estateValue': 2000000000		// 단위: 원
	},
	{
		'id': '9',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '9',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '부농가문어머니',
			'email': 'sinho0689@gmail.com',
			'address': '전북 전주시 덕진구 어머니집',
			'phone': '010-1234-5671',
			'sex': 'female',
			'age': 55
		},
		'money': 20000000000,		// 단위: 원
		'estateValue': 300000000		// 단위: 원
	},
	{
		'id': '10',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '10',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '부농가문할머니',
			'email': 'gkfajsl@gmail.com',
			'address': '전북 전주시 덕진구 할머니집',
			'phone': '010-1234-5671',
			'sex': 'female',
			'age': 95
		},
		'money': 20000000,		// 단위: 원
		'estateValue': 100000000		// 단위: 원
	},
	{
		'id': '11',
		'$class' : 'org.hyperledger.fundnetwork.Customer',
		'participantKey': '11',
		'contact': {
			'$class': 'org.hyperledger.fundnetwork.Contact',
			'name': '부농가문첫째딸',
			'email': 'imyourdauther@gmail.com',
			'address': '전북 전주시 덕진구 신혼집',
			'phone': '010-9905-**45',
			'sex': 'female',
			'age': 35
		},
		'money': 40000000,		// 단위: 원
		'estateValue': 50000000		// 단위: 원
	}
];
//
// _.forEach(data, function(value, key) {
// 	data[key].birthday = moment.utc().format();
// 	// data[key].createdAt = moment.utc().format();
// 	data[key].updatedAt = moment.utc().format();
// });

module.exports = data;
