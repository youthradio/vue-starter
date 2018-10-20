<template>
  <div class="row">
    <div class="col-12 col-md-12 mx-auto">
      <div id="map" />
    </div>
  </div>
</template>

<script>
import d3 from '../util/d3';
import * as topojson from 'topojson';
import CommonUtils from '../mixins/CommonUtils';

const WIDTH = 960;
const HEIGHT = 600;

export default {
  name: 'USAMap',
  mixins: [
    CommonUtils,
  ],
  data() {
    return {
      svg: null,
      aspect: null,
      projection: null,
      path: null,
      uspath: null,
    }
  },
  computed: {

  },
  watch: {
    uspath() {
      this.drawMap();
    }
  },
  created() {
    //fetch us map paths async
    (async () => {
      this.uspath = await fetch('maps/us-light.json')
        .then(res => res.json())
    })();
  },
  mounted() {
    this.svg = d3.select("#map").append('svg');
    this.aspect = WIDTH / HEIGHT;
    this.projection = d3.geoAlbersUsa().translate([WIDTH / 2, HEIGHT / 2]);
    this.path = d3.geoPath(this.projection);
    this.svg.attr("width", WIDTH)
      .attr("height", HEIGHT);


    this.svg.attr("viewBox", "0 0 " + WIDTH + " " + HEIGHT)
      .attr("perserveAspectRatio", "xMinYMid meet");
    this.resizeContainer();
    window.addEventListener("resize", this.resizeContainer);

  },
  methods: {
    drawMap() {
      this.svg.append("g").selectAll(".states")
        .data(topojson.feature(this.uspath, this.uspath.objects.states).features)
        .enter().append("path")
        .attr("class", "states")
        .attr("d", this.path);

      this.svg.append("path")
        .datum(topojson.mesh(this.uspath, this.uspath.objects.states, (a, b) => a !== b))
        .attr("class", "state-borders")
        .attr("d", this.path);
    },
    resizeContainer() {
      const targetWidth = parseInt(this.svg.node().parentNode.clientWidth);
      this.svg.attr("width", targetWidth);
      this.svg.attr("height", Math.round(targetWidth / this.aspect));
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables';

/deep/ #map {
  .states {
      stroke: $dark;
      stroke-width: 1px;
      fill: $dusk;
      stroke-linejoin: round;
  }
  .states:hover {
      fill: $sky-blue;
      opacity: 1.0;
  }
  .state-borders {
      fill: none;
      stroke: $dark;
      stroke-width: 1px;
      stroke-linejoin: round;
      stroke-linecap: round;
      pointer-events: none;
  }
}

</style>
