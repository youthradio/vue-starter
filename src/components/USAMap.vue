<template>
  <div class="row">
    <div class="col mx-auto">
      <div id="map" />
    </div>
  </div>
</template>

<script>
import d3 from '../util/d3';
import { geoAlbersUsaTerritories } from 'd3-composite-projections';
import * as topojson from 'topojson';
import CommonUtils from '../mixins/CommonUtils';

const WIDTH = 920;
const HEIGHT = 600;
const MARKER_S_MIN = 0.07;
const MARKER_S_MAX = 0.15;
const MARKER_PATH = "M -19.732,-10.330125 C -165.03,-220.96916 -192,-242.58716 -192,-320.00016 c 0,-106.039 85.961,-192 192,-192 106.039,0 192,85.961 192,192 0,77.413 -26.97,99.031 -172.268,309.670035 -9.535,13.774 -29.93,13.773 -39.464,0 z";

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
      isMapReady: false,
    }
  },
  computed: {
    markersData() {
      return this.$store.state.markersData;
    },
    mapData() {
      return this.$store.state.mapData;
    },
    loadingMarkers() {
      return this.$store.state.loadingMarkers;
    },
    loadingMap() {
      return this.$store.state.loadingMap;
    },
  },
  watch: {
    loadingMap() {
      this.renderMap();
    },
    loadingMarkers() {
      this.renderMap();
    }
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  mounted() {
    this.svg = d3.select("#map").append('svg');

    this.aspect = WIDTH / HEIGHT;
    this.projection = geoAlbersUsaTerritories()
      .translate([WIDTH / 2, HEIGHT / 2]);
    this.path = d3.geoPath(this.projection);
    this.svg.attr("width", WIDTH)
      .attr("height", HEIGHT);
    this.svg.attr("viewBox", "0 0 " + WIDTH + " " + HEIGHT)
      .attr("perserveAspectRatio", "xMinYMid meet");

    const defs = this.svg.append("defs");

    // create filter with id #drop-shadow
    // height=130% so that the shadow is not clipped
    const filter = defs.append("filter")
        .attr("id", "drop-shadow")
        .attr("height", "130%");

    // SourceAlpha refers to opacity of graphic that this filter will be applied to
    // convolve that with a Gaussian with standard deviation 3 and store result
    // in blur
    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 5)
        .attr("result", "blur");

    // translate output of Gaussian blur to the right and downwards with 2px
    // store result in offsetBlur
    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 5)
        .attr("dy", 5)
        .attr("result", "offsetBlur");

    // overlay original SourceGraphic over translated blurred opacity by using
    // feMerge filter. Order of specifying inputs is important!
    const feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic");


    this.resizeContainer();
    window.addEventListener("resize", this.resizeContainer);

  },
  methods: {
    renderMap() {
      if(!this.loadingMap && !this.loadingMarkers){
        this.drawMap();
        this.drawMarkers();
      }
    },
    drawMap() {
      this.svg.append("path")
        .attr("filter", "url(#drop-shadow)")
        .attr("d", this.path(topojson.mesh(this.mapData, this.mapData.objects.states, (a, b) => a === b)))

      this.svg.append("g").selectAll(".states")
        .data(topojson.feature(this.mapData, this.mapData.objects.states).features)
        .enter().append("path")
        .attr("class", "states")
        .attr("d", this.path);

    this.svg.append("path")
      .style("fill","none")
      .style("stroke","rgb(0,0,0,0.5)")
      .attr("d", this.projection.getCompositionBorders());
    },
    drawMarkers() {
      this.svg.append("g").selectAll(".marker")
        .data(this.markersData.filter(e => (e.geo ? (!isNaN(e.geo[0]) || !isNaN(e.geo[1])) : false)))
        .enter()
        .append("path")
        .attr("d", MARKER_PATH)
        .attr("id", (e, i) => `marker-id-${i}`)
        .attr("class", (e, i) => `marker marker-category-${i%4}`)
        .attr("transform", e => `translate(${this.projection(e.geo)[0]},${(-Math.random() * 1000)})scale(${MARKER_S_MAX},${MARKER_S_MAX})`)
        .transition()
        .ease(d3.easeBounce)
        .duration(1500)
        .attr("transform", e => `translate(${this.projection(e.geo)[0]},${this.projection(e.geo)[1]})scale(${MARKER_S_MIN},${MARKER_S_MIN})`)
        .attr("filter", "url(#drop-shadow)")

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
      fill: $white;
      stroke-linejoin: round;
  }
  .states:hover {
      fill: $sky-blue;
      opacity: 1.0;
  }
  .state-borders {
      fill: none;
      stroke: $dark;
      stroke-width: 3px;
      stroke-linejoin: round;
      stroke-linecap: round;
      pointer-events: none;
  }
  .marker {
      opacity: 1;
      stroke-width: 5;
      stroke: black;

      &:hover {
        /* fill: #c65067; */
        opacity: 1;
      }
  }
  .marker-category-0 {
    fill: $red;
  }
  .marker-category-1 {
    fill: $dusk;
  }
  .marker-category-3 {
    fill: $dark;
  }
}

</style>
