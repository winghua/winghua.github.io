<template>
	<div class="article">
		<div class="loading" v-if="loading">loading...</div>
		<div class="writing" v-else>
			<h2>{{post.title}}</h2>
			<ul>
				<li>classify:{{postTab}}</li>
				<li>{{post.visit_count}} time(s) visited</li>
				<li>
					author:
					<router-link :to="{name:'userInfo',params:{name:post.author.loginname}}">{{post.author.loginname}}</router-link>
				</li>
			</ul>
			<div v-html="post.content" id="content"></div>
		</div>
		<div id="reply">
			<div class="replySec" v-for='(reply,index) in post.replies'>
				<div class="replyUp">
					<router-link :to='{name:"userInfo",params:{name:reply.author.loginname}}'>
						<img :src="reply.author.avatar_url" alt="">
					</router-link>
					<router-link :to='{name:"userInfo",params:{name:reply.author.loginname}}'>
						{{reply.author.loginname}}
					</router-link>
					<span>{{index +1}} floor(s)</span>
					<div class="thumbs" v-if='reply.ups.length > 0'>
						<strong>❤</strong>
						{{reply.ups.length}}
					</div>
					<p v-html='reply.content' class="replyContent"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Article',
		data(){
			return {
				post:{
					author:{
						loginname:'temp' //default setting
					}
				},
				loading:false
			}
		},
		computed:{
			postTab(){
				var type = this.post.tab.toString();
				if(type == "ask"){
					return "ask";
				} else if( type == "share"){
					return "share";
				} else if( type == "job"){
					return "job";
				} else {
					return "good";
				}
			}
		},
		methods:{
			getData(){
				this.$axios({
					url:`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
					method:'get',
					params:{
						mdrender:true
					}

				}).then((response) => {
					if(response.data.success === true){
						this.post = response.data.data;
						this.loading = false;

					}
				}).catch((err) => {console.log(err)});
			}
		},
		beforeMount(){
			this.loading = true;
			this.getData();
		},
		watch:{
			$route(){
				this.getData();
			}
		}
	}
</script>
<style  lang="less">
	 @import url("../assets/markdown-github.css");
	@width: 70%;
	.article{
		box-sizing: border-box;
		display: inline-block;
		width: @width;
		border: 1px solid #ddd;
		padding: 16px 8px;
		margin-left: 3%;
		&>h1{
			font-size: 10px;
		}
		#content{
				padding: 40px 20px 40px 20px;
				line-height: 1.6;
				padding-bottom: 20px;
			}
		.writing{
			background-color: white;
			margin-bottom: 10px;
			padding-left: 20px;
			padding-top: 10px;
			
			h1{
				font-size: 20px;
				font-weight: 600;
			}
			&>ul li{
				display: inline-block;
				font-size: 16px;
				color: #a8a3a3;
				padding-left: 5px;
			}
		}
		#reply{
			display: flex;
			flex-direction: column;
			.replySec{
				box-sizing: border-box;
				width: 100%;
				border-bottom: 1px solid #c0ccda;
				padding: 20px;
				background-color: white;
				&>p{
					padding-left: 50px;
					clear: both;
				}
				img{
					width: 30px;
					height: 30px;
					margin-right: 20px;
				}
				p.replyContent{
					margin-top: 20px;
					img{
						overflow: hidden;
						width: @width*0.8 ;
						height: 100%
					}

				}
				.replyUp{
					display: inline-block;
					width: 100%;
					.thumbs{
						float: right;
						color:red ;
						strong{
							display: inline-block;
							vertical-align: middle;
						}
					}
					span{
						display: inline-block;
						font-size: 14px;
						margin-left: 6px;
						color:#806767;
						vertical-align: text-top;
					}
					&>a{
					color: black;
					font-weight: 600;
					}

				}
			}
			
			
		}
		
	}
</style>
