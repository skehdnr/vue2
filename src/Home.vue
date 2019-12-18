<template>
	<div id="app">
	<layout>
		<template #header="header">
			<h1>{{header.title}}</h1>
		</template>
		<template #sidebar="sidebar">
			<ul class="menu">
				<li v-for="i of sidebars" :key="i.menu">
					<router-link :to="i.link">{{i.menu}}</router-link>
				</li>
			</ul>
		</template>
		<template #content="content">
			<router-view></router-view>
			<h3>{{content.title}}</h3>
		</template>
		<template #footer="footer">
		<h2>{{footer.title}}</h2>
		</template>
	</layout>
	</div>
</template>

<script>
import Layout from "@/components/Layout.vue"
export default{
	components:{
		Layout
	},
	data(){
		return {
			sidebars : [
				{menu : "메인", link : "home"},
				{menu : "장바구니", link : "cart"},
				{menu : "계산기", link : "calculator"},
				{menu : "두수사이의 자연수의 합", link : "seqsum"},
				{menu : "계좌관리", link : "account"},
				{menu : "해야할일", link : "todo2"}
			]
		}
	}
}
</script>

<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
}
ul.menu a {
    text-decoration:none;
}
</style>