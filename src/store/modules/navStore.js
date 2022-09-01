
const state = {
    // data를 모아서 관리하는 객체
    navData : [
        {
          url : '#',
          title : '마시그레이',
          subarr : [
            {
              suburl: '#',
              subtitle:'회사소개'
            },
            {
              suburl: '#',
              subtitle:'연역'
            },
            {
              suburl: '#',
              subtitle:'CEO인사말'
            },
            {
              suburl: '#',
              subtitle:'BI / 비전'
            },
            {
              suburl: '#',
              subtitle:'오시는길'
            },
          ]
        },
        {
          url : '#',
          title : '메뉴',
          subarr : [
            {
              suburl: '#',
              subtitle:'신메뉴'
            },
            {
              suburl: '#',
              subtitle:'커피'
            },
            {
              suburl: '#',
              subtitle:'음료'
            },
            {
              suburl: '#',
              subtitle:'디저트'
            },
            {
              suburl: '#',
              subtitle:'MD상품'
            },
          ]
        },
        {
          url : '#',
          title : '프랜차이즈',
          subarr : [
            {
              suburl: '#',
              subtitle:'가맹안내'
            },
            {
              suburl: '#',
              subtitle:'가맹절차'
            },
            {
              suburl: '#',
              subtitle:'매장인테리어'
            },
            {
              suburl: '#',
              subtitle:'커피 아카데미'
            },
            {
              suburl: '#',
              subtitle:'가맹상담신청'
            },
          ]
        },
        {
          url : '#',
          title : '매장안내',
          subarr : [
            {
              suburl: '#',
              subtitle:'매장안내'
            },
          ]
        },
        {
          url : '#',
          title : '공지사항',
          subarr : [
            {
              suburl: '#',
              subtitle:'공지사항'
            },
            {
              suburl: '#',
              subtitle:'이벤트'
            },
          ]
        },
        {
          url : '#',
          title : '고객의소리',
          subarr : [
            {
              suburl: '#',
              subtitle:'FAQ'
            },
            {
              suburl: '#',
              subtitle:'QNA'
            },
            {
              suburl: '#',
              subtitle:'케이터링'
            },
          ]
        },
      ]
}
const actions = {}
const mutations = {}
const getters= {
    // state 출력자리
    getNavData(state){
        return state.navData;
      }
}

export default {state,actions,mutations,getters};