<template>
		<div class="userInfo">
			<section class="head">
				<img :src="userinfo.avatar_url" :title="userinfo.loginname" alt="">
				<p>{{userinfo.loginname}}</p>
				<p>{{userinfo.score}} scores</p>
				<p>register time : {{userinfo.create_at | formatDate}}</p>
			</section>
			<section class="replies">
				<p>the theme of the reply</p>
				<ul>
					<li v-for="item in userinfo.recent_replies">
						<router-link :to="{name:'postContent',params:{id:item.id,name:item.author}}" :title="item.title">
							{{item.title}}
						</router-link>
						
					</li>
				</ul>
			</section>
			<section class="topics">
				<p>created theme</p>
				<ul>
					<li v-for="item in userinfo.recent_topics">
						<router-link :to="{name:'postContent',params:{id:item.id,name:item.author.loginname}}" :title="item.title">
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</section>
		</div>
</template>

<script>
	export default{
		name:'UserInfo',
		data:function(){
			return {
				userinfo:{}
			}
		},
		methods:{
			getData:function(){
				this.$axios({
					url:`https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
					method:'get',
				}).then((response) =>{
					if(response.data.success === true){
						this.userinfo = response.data.data;
					}
				}).catch((err) => {console.log(err)})
			}
		},
		beforeMount:function(){
			this.getData();
		}
	}
</script>
<style scoped lang="less">
	.userInfo{
		background: white;
		width: 75%;
		margin: 10px auto;
		padding: 10px;
		section.head{
			padding: 12px;
			img{
				padding-left: 12px;
				width: 80px;
			}
		}
		section.replies,section.topics{
			font-size: 16px;
			border-top: 10px solid #ddd;
			li{
				padding: 4px 0 4px 24px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				line-height: 30px;
				vertical-align: middle;
				a{
					color:#094E99;
				}
			}
			p{
				font-size: 25px;
				padding-bottom: 12px;
			}
		}
		p{
			padding: 12px 0 0 12px;
			background-color: rgba(212,205,205,0.17);
			font-size: 20px;
			font-weight: 500;		
		}

	}
</style>