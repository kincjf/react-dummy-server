"use strict";



// Customer의 id 6번은 일반 투자자임
let familyList = [
	{
		inheritor: 4,		// 상속자
		ancestor: [1, 2, 3, 5]		// 피상속자
	},
	{
		inheritor: 10,		// 상속자
		ancestor: [7, 8, 9, 11]		// 피상속자
	}
];

var data = [
	{
		"id": 1,
		"$class": "org.hyperledger.fundnetwork.Testament",
		"testamentKey": "1",
		"stockCompanyKey": "1",
		"comment": "추가상속내용 입력",		// 추가 상속 내용
		"createAt": "2018-08-31",
		"updateAt": "2018-09-31",
		"complete": true,
		"inheritor": {
			"$class": "org.hyperledger.fundnetwork.Inheritor",
			"customerKey": "4",
			"sign": true,
			"id": "4"
		},
		"ancestor": [
			{
				"$class": "org.hyperledger.fundnetwork.Ancestor",
				"customerKey": "1",
				"percent": 30,		// 단위: %, ancestor의 모든 합이 100을 넘으면 안됨
				"relation": "맏아들",		// 그냥 구분하기 귀찮으니 한글로 입력해서 그대로 뿌리자
				"id": "1"
			},
			{
				"$class": "org.hyperledger.fundnetwork.Ancestor",
				"customerKey": "2",
				"percent": 10,
				"relation": "손자",
				"id": "3"
			},
			{
				"$class": "org.hyperledger.fundnetwork.Ancestor",
				"customerKey": "3",
				"percent": 20,
				"relation": "며느리",
				"id": "3"
			},
			{
				"$class": "org.hyperledger.fundnetwork.Ancestor",
				"customerKey": "5",
				"percent": 40,
				"relation": "첫째딸",
				"id": "5"
			}
		]
	}
];


_.forEach(userData, function (value, key) {
	data[key] = {};		// 초대 메시지를 받은 사람(본인)

	_.forEach(userData, function (fValue, fKey) {	// 초대 메시지를 전송한 사람(타인)
		if (_.eq(key, fKey)) {
			return;
		}

		data[key][fKey] = {
			status: function () {
				let i = _.random(-1, 1);
				let status = "decline";

				if (i === -1) {
					status = "decline";
				} else if (i === 0) {
					status = "pending";
				} else if (i === 1) {
					status = "accept";
				}

				return status;
			}(),
			message: "hello? " + key
		};
	});

});

module.exports = data;
