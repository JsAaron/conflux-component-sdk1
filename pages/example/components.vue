<template>
	<view class="wrap">
		<page-nav></page-nav>
		<view class="list-wrap">
			<u-cell-group title-bg-color="rgb(243, 244, 246)" :title="item.groupName" v-for="(item, index) in components" :key="index">
				<u-cell-item :titleStyle="{ fontWeight: 500 }" @click="openPage(item1.path)" :title="item1.title" v-for="(item1, index1) in item.list" :key="index1">
					<template v-slot:icon>
						<image class="u-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image>
					</template>
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="other">
			<u-alert-tips type="primary" title="其他组件的使用方法与之前一样！"></u-alert-tips>
		</view>
		<u-gap height="70"></u-gap>
	</view>
</template>

<script>
	import components from "./components.config.js";
	export default {
		data() {
			return {
				components: components
			};
		},
		methods: {
			openPage(path) {
				this.$u.route({
					url: path
				});
			}
		},
		computed: {
			getIcon() {
				return path => {
					return "https://cdn.uviewui.com/uview/example/" + path + ".png";
				};
			}
		}
	};
</script>

<style>
	/* page {
		background-color: rgb(240, 242, 244);
	} */
</style>

<style lang="scss" scoped>
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.other {
		padding: 30rpx;
	}
</style>
