<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	
	.sc-text-shadow{
		text-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.13);
	}
	.sc-text-bold{
		font-weight: bold;
	}
	
</style>
