export default {
  state: {
    ads: [
      {
        title: 'auto',
        description: 'New auto. Contract',
        promo: true,
        imageSrc: 'http://cm3.dlstatic.ru/publication/preview_big/0035/preview_big_35746.on_detail.jpeg',
        id: '1'
      },
      {
        title: 'house',
        description: 'New house. 70k$',
        promo: true,
        imageSrc: 'https://i.pinimg.com/originals/27/6e/e9/276ee98abf60930f8a7b98ed1ca457fe.jpg',
        id: '2'
      },
      {
        title: 'ship',
        description: 'New ship. 10000$',
        promo: false,
        imageSrc: 'https://avatars.mds.yandex.net/get-zen_doc/1112142/pub_5d13a85f6f2f8900bd48d397_5d13a8829b710800af89a71b/scale_1200',
        id: '3'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = '5'
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adByID (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
