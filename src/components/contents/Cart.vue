<template>
<div>
	<ul>
		<li v-for="item of items" :key="item.name" style="list-style-type : none" >
		<img style="width:100px;height:100px" :src="item.img" alt=""> 
			{{item.name}} : {{item.price}}원
			<input type="text" v-model="item.qty"/>개
		</li>
	</ul>
	<button @click="buy">담기</button>
	<p>합계 : {{totalPrice}} 원</p>
  </div>
</template>

<script>
export default {
	name: 'Cart',
	data() {return {items :[{name:'연필', price:300, qty:0, img: require(`@/assets/images/pencil.jpg`)},
		{name:'공책', price:400, qty:0, img: require(`@/assets/images/note.jpg`)},
		{name:'지우개', price:500, qty:0, img: require(`@/assets/images/eraser.jpg`)}]}},
		methods : {
			buy(){
				alert(`담기 버튼 클릭`)
			}
		},
		computed : {
			totalPrice(){
				return this.items.reduce((sum,item)=>{
					return sum + (item.price * item.qty)
				},0)
			}
		},
		created(){
			//alert(`객체생성`)
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
