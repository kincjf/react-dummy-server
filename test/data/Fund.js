'use strict';

// 모든 정보는 손실 위험률이 존재하는 "펀드"로 입력함
var data = [
	{
		'id': '1',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '고배당상속펀드',
		'category': 'inherit',
		'comment': '위험률이 없는 안전한 상속펀드입니다. 평균 수익률 2% 이상 보장',
		'interestRate': 0,		// 수익률 데이터를 입력하지 않는 경우 - 0으로 입력
		'initialTotalPrice': 100000000,			// 초기 순자산 금액 규모. 만원단위
		'TotalPrice': 100000000 * 2.25		// 현재 순자산 금액 규모
	},
	{
		'id': '2',
		'$class': 'org.hyperledger.fundnetwork.Fund',
		'fundNameKey': '고배당투자펀드',
		'category': 'investment',
		'comment': '위험률이 없는 안전한 펀드입니다. 평균 수익률 3% 이상 보장',
		'interestRate': 0,		// 수익률 데이터를 입력하지 않는 경우 - 0으로 입력
		'initialTotalPrice': 500000000,			// 초기 순자산 금액 규모. 만원단위
		'TotalPrice': 500000000 * 6.711		// 현재 순자산 금액 규모
	}
];

module.exports = data;
