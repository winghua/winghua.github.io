import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import PostList from '@/components/PostList'
import SideBar from '@/components/SideBar'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        body:PostList,
      }
      
    },
    {
    	path:'/topic/:id&auther=:name',
    	name:'postContent',
    	components:{
    		body:Article,
        side:SideBar
    	}
    },
    {
      path:'/user/:name',
      name:'userInfo',
      components:{
        body:UserInfo
      }
    }
  ]
})
