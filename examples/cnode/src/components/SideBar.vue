<template>
	<div class="sideBar">
		<div class="autherinfo">
			<section class="authersummary">
				<p>author</p>
				<router-link :to="{name:'userInfo',params:{name:userinfo.loginname+''}}">
					<img :src="userinfo.avatar_url" alt="">
				</router-link>
				<router-link :to="{name:'userInfo',params:{name:userinfo.loginname+''}}" :title="userinfo.loginname">
					{{userinfo.loginname}}
				</router-link>
				<p class="score">scores:{{userinfo.score}}</p>
			</section>
			<section class="recent_topic">
				<p>recent topics</p>
				<ul>
					<li v-for="(list,index) in topicList">
						<router-link :to="{name:'postContent',params:{id:list.id,name:list.author.loginname}}" :title="list.title">
							{{index+1+'. '}}{{list.title}}
						</router-link>
					</li>
				</ul>
			</section>
			<section class="recent_reply">
				<p>recent replics</p>
				<ul>
					<li v-for="(list,index) in userinfo.recent_replies">
						<router-link :to="{name:'postContent',params:{id:list.id,name:list.author.loginname}}" :title="list.title">
							{{index+1+'. '}}{{list.title}}
						</router-link>
					</li>
				</ul>	
			</section>
		</div>
	</div>
</template>
<script>
	export default{
		name:"SideBar",
		data:function(){
			return {
				userinfo:{},
				topicList:[]
			}
		},
		methods:{
			getData:function(){
				this.$axios({
					url:`https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
					method:'get'
				}).then( (response) => {
					if(response.data.success === true){
						this.userinfo = response.data.data;
						this.topicList = this.userinfo.recent_topics.slice(0,5);
					}
				}).catch( (err) => console.log(err));
			}
		},
		beforeMount:function(){
			this.getData();
		},
		// computed:{
		// 	topicList:function(){	
		// 		return this.userinfo.recent_topics.slice;
				
		// 	}

		// },
		watch:{
			$route(){
				this.getData();
			}
		}
		
	}
</script>
<style scoped lang="less">
.sideBar{
	float: right;
	width: 24%;
	box-sizing: border-box;
	margin-right: 3%;
	padding: 16px 8px;
	.autherinfo{
		background-color: #fff;
	}
	p{
		padding: 12px 0 12px 12px;
		background-color: rgba(212,205,205,0.17);
		font-size: 20px;
	}
	img{
		display: inline-block;
		width: 70px;
		padding: 0 0 0 6px;
		border-radius: 3px;

	}
	a{
		color: #a8a3a3;
	}
	.authersummary > a{
		display: inline-block;
		padding: 12px 0 0 6px;
		vertical-align: top;
		&[title]{
			margin-top: 20px;
			margin-left: 2px;
		}
	}
	.recent_topic,
	.recent_reply{
		font-size: 14px;
		border-top: 10px solid #ddd;
		ul{
			padding: 10px 0 10px 0;
			li{
				padding: 4px 0 0 12px;
				color: #c0ccda;
				white-space: nowrap;
				a{
					display: inline-block;
					text-overflow: ellipsis;
					overflow: hidden;
					max-width: 95%;
				}
			}
		}
		
	}
}
	
</style>