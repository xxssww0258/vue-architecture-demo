<template>
    <svg :class="svgClass">
        <use :xlink:href="iconName" />
    </svg>
    <!-- demo -->
    <!-- <svg-icon class-name="international-icon" icon-class="language" /> -->
</template>

<script>
export default {
    name : 'SvgIcon',
    props: {
        iconClass: {
            type    : String,
            required: true
        },
        className: {
            type   : String,
            default: ''
        }
    },
    computed: {
        iconName () {
            return `#icon-${this.iconClass}`
        },
        svgClass () {
            return `svg-icon ${this.className}`
        }
    }
}
/* webpack 的配置
      rules:[
        {
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            include: [resolve('src/icons')],
            options: {
                symbolId: 'icon-[name]'
            }
        },
        // 放在url-loader 前
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            ...
        }
    ]
*/

</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
