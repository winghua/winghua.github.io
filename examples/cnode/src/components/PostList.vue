<template>
	<div class="list">
		<div class="loading" v-if="loading">loading...</div>
		<div class="posts" v-else>
			<ul class="main">
				<li v-for="(post,index ) in posts">
					<span>{{index+1+"."}}</span>
					<router-link :to="{name:'userInfo',params:{name:post.author.loginname}}" :title='post.author_id'>
						<img :src="post.author.avatar_url" :title="post.author.loginname">
					</router-link>
					<span class="count">
						{{post.reply_count}}/{{post.visit_count}}
					</span>
					<router-link :to="{name:'postContent',params:{id:post.id,name:post.author.loginname}}" :title="post.title">
						{{post.title}}
					</router-link>
					<span class="last_reply">
						{{post.last_reply_at | formatDate}}
					</span>
				</li>
			</ul>
			<div class="navigation">
				<ul >
					<li v-for="page in pages">
						<a href="###" @click="jump(page)" :class="{active:activePage === page}">{{page}}</a>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{
		name:'PostList',
		data () {
			return {
				posts:{},
				loading:false,
				startCount:1,
				activePage:1
			}
		},
		computed:{
			pages:function(){
				return [
						"<<",
						"<",
						this.startCount,
						this.startCount+1,
						this.startCount+2,
						this.startCount+3,
						this.startCount+4,
						">",
						">>"
				]
			}
		},
		filters:{
			timeStyle(createTime){
				return String(createTime).match(/.{10}/)[0];
			}
		},
		methods:{
			getData:function(count = 1){
				this.$axios({
					url:'https://cnodejs.org/api/v1/topics',
					method:'get',
					params:{
						page:count,
						limit:20
					}
				}).then((response) => {
					if( response.data.success === true){
						this.posts = response.data.data;
						this.loading = false;
					}
				}).catch((err)=>{console.log(err)});
			},
			jump:function(opt){
				var loadPage = 1;
				switch(opt){
					case "<<":loadPage = 1;
							  this.startCount = loadPage;	
							  break;
					case ">>":loadPage = 96;
							  this.startCount = loadPage;
							  break;
					case "<" :
							  if(this.activePage >1){ 
								  this.activePage -=1;
								  loadPage = this.activePage;
								  if(this.startCount >1){
								  	this.startCount -=1;
								  }
								}else{
									return "";
								}
							  break;
					
					case ">" :
							 if(this.activePage < 100){
								 this.activePage +=1;
								 loadPage =  this.activePage
								 if(this.startCount < 96){
								 	this.startCount +=1;
								 }
							 }else{
							 	return "";
							 }
							 
							 break;
					default :
							loadPage = opt;
				}
				
				this.activePage = loadPage;	
				this.getData(loadPage);
			}
		},
		beforeMount:function(){
			this.loading = true;
			this.getData();
		}
	}
</script>

<style scoped lang="less">
	.list{
		.posts{
			background-color: #fff;
			padding: 15px;
			margin: 15px 50px;
		
			.main {
				li{
					list-style: none;
					margin-bottom: 14px;
					border-bottom: 1px solid #E7E7E7;
					line-height: 30px;
					img{
						width: 20px;
						height: 20px;
					}
					span{
						display: inline-block;
						text-align: center;
						font-size: 12px;
						margin: 0 10px;
						&.count{
							width: 70px;
						}
						}
					}
				a{
					white-space: nowrap;
					display: inline-block;
					vertical-align: middle;
					overflow: hidden;
					text-overflow: ellipsis;
					max-width: 70%;
					&:visited{
						color:#858585;
					}
				}

				.last_reply{
					float:right;
					font-size: 15px;
					margin-top: 10px;
				}
					
			}
			
		}

		
	}
	.navigation{
		font-size: 0;
		li{
			display: inline-block;
			a{
				display: inline-block;
				width: 50px;
				height: 40px;
				margin-left: -1px;
				border: 1px solid #ccc;
				text-align: center;
				line-height: 40px;
				font-size: 15px;
				color:#888;
				&.active{
					font-weight: 700;
					color:#000;
				}
			}
			
		}
	}
</style>