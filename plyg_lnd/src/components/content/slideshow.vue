<template>
  <div class="slideshow-wrapper">
    <div class="grid-wrapper">
      <carousel class="slideshow"
        :per-page="1"
        :loop="true"
        :navigationEnabled="true"
        paginationActiveColor="#ffffff"
        paginationColor="#706e68"
        paginationPosition="bottom-overlay"
        :paginationPadding="13/2"
        :paginationSize="10"
        :navigation-next-label="nextLabel"
        :navigation-prev-label="prevLabel"
        @navigation-click="navclick"
        @pagination-click="pagclick"
        @page-change="slideclick"
      >
        <slide class="slideshow-slide">
            <img src="../../assets/images/slide-hello.jpg"
              alt="Hello Slide"
              class="__img"
            >
        </slide>
        <slide class="slideshow-slide">
            <img src="../../assets/images/slide-circle.jpg"
              alt="Circle Slide"
              class="__img"
            >
        </slide>
        <slide class="slideshow-slide">
            <img src="../../assets/images/slide-play.jpg"
              alt="Play Slide"
              class="__img"
            >
        </slide>
      </carousel>
      <div class="slideshow-titlegroup">
        <h1 class="__title -ginormous">
          {{ title }}
        </h1>
        <h5 class="__subtitle">
          {{ subtitle }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  data() {
    return {
      title: 'lorem ipsum.',
      subtitle: 'Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.',
      nextLabel: "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAD8CAYAAABTq8lnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTExLTEyVDIxOjUwOjQyKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMS0xMlQyMjoxNDowNyswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMS0xMlQyMjoxNDowNyswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NmQ2ZjRlM2MtNDhiMS1jNDQ0LWI3NjUtYWI1MDgxMDk2NTU0IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2M2YzAzZDEtYmJhNi1iZjRjLWJmMGItNDVmZmNiMWY1NjJkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzQ3ZjYzMTktMGNhZi1hYjQzLTk3N2UtM2VkMjI1Zjg5NzZmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNDdmNjMxOS0wY2FmLWFiNDMtOTc3ZS0zZWQyMjVmODk3NmYiIHN0RXZ0OndoZW49IjIwMTktMTEtMTJUMjE6NTA6NDIrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDNhZGY4YmItNGViNy00MTRhLThjYmYtNjFmOTQ5ZTk5ODM1IiBzdEV2dDp3aGVuPSIyMDE5LTExLTEyVDIyOjExOjM5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZkNmY0ZTNjLTQ4YjEtYzQ0NC1iNzY1LWFiNTA4MTA5NjU1NCIgc3RFdnQ6d2hlbj0iMjAxOS0xMS0xMlQyMjoxNDowNyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnw+yrEAAAWoSURBVHic7dpLblsxDEBRt/vfczppizSN7fehJJI6ZwWEgMsBoR8fHx8PXnr3QD+mTAEBfq4eILkj29DGpAzBP3cmZNFTguDjiJ70BB9L9KQm+HiiJy3BjyF6UhL8OKInHcGPJXpSEfx4oicNwT8X+YNO9KQg+NdETyuCf0/0tCH4Y0RPC4I/TvSUJ/hzRE9pgj9P9JQl+GtET0mCv070lCP4e0RPKYK/T/SUIfgYoqcEwccRPekJPpboSU3w8URPWoIfQ/SkJPhxRE86gh9L9KQi+PFETxqCn0P0pCD4eUTPcoKfS/QsJfj5RM8ygl9D9Cwh+HVEz3SCX0v0TCX49UTPNILPQfRMIfg8RM9wgs9F9Awl+HxEzzCCz0n0DCH4vERPOMHnJnpCCT4/0RNG8DWInhCCr0P03Cb4WkTPLYKvR/RcJviaRM8lgq9L9Jwm+NpEzymCr0/0HCb4HkTPIYLvQ/S8JfheRM9Lgu9H9Dwl+J5Ez7cE35fo+Y/gexM9/xB8f6LnL8HvQfQ8Hg/B70T0CH4zot+c4Pcj+o0Jfk+i35Tg9yX6DQl+b6LfjOAR/UYEz+Mh+m0Inj9EvwHB85nomxM8X4m+McHzHdE3JXieEX1DgucV0TcjeN4RfSOC5wjRNyF4jhJ9A4LnDNEXJ3jOEn1hgucK0RcleK4SfUGC5w7RFyN47hJ9IYInguiLEDxRRF+A4Ikk+uQETzTRJyZ4RhB9UoJnFNEnJHhGEn0ygmc00ScieGYQfRKCZxbRJyB4ZhL9YoJnNtEvJHhWEP0igmcV0S8geFYS/WSCZzXRTyR4MhD9JIInC9FPIHgyEf1ggicb0Q8keDIS/SCCJyvRDyB4MhN9MMGTnegDCZ4KRB9E8FQh+gCCpxLR3yR4qhH9DYKnItFfJHiqEv0Fgqcy0Z8keKoT/QmCpwPRHyR4uhD9AYKnE9G/IXi6Ef0Lgqcj0T8heLoS/TcET2eR0bcgeLoT/SeCZwei/03wsBHBs4M2R7e7BE93Yv9E8HQm9i8ET1eRsbc5+gmejsT+hODpRuwvCJ5OxP6G4OlC7AcIng7EfpDgqU7sJwieysR+kuCpSuwXCJ6KxH6R4KlG7DcInkrEfpPgqULsAQRPBWIPIniyE3sgwZOZ2IMJnqzEPoDgyUjsgwiebMQ+kODJROyDCZ4sxD6B4MlA7JMIntXEPpHgWUnskwmeVcS+gOBZQeyLCJ7ZxL6Q4JlJ7IsJnlnEnoDgmUHsSQie0cSeiOAZSezJCJ5RxJ6Q4BlB7EkJnmhiT0zwRBJ7coInitgLEDwRxF6E4LlL7IUInjvEXozguUrsBQmeK8RelOA5S+yFCZ4zxF6c4DlK7A0IniPE3oTgeUfsjQieV8TejOB5RuwNCZ7viL0pwfOV2BsTPJ+JvTnB84fYNyB4Hg+xb0PwiH0jgt+b2Dcj+H2JfUOC35PYNyX4/Yh9Y4Lfi9g3J/h9iB3Bb0LsPB4Pwe9A7Pwl+N7Ezj8E35fY+Y/gexI73xJ8P2LnKcH3InZeEnwfYuctwfcgdg4RfH1i5zDB1yZ2ThF8XWLnNMHXJHYuEXw9Yucywdcidm4RfB1i5zbB1yB2Qgg+P7ETRvC5iZ1Qgs9L7IQTfE5iZwjB5yN2hhF8LmJnKMHnIXaGE3wOYmcKwa8ndqYR/FpiZyrBryN2phP8GmJnCcHPJ3aWEfxcYmcpwc8jdpYT/BxiJwXBjyd20hD8WGInFcGPI3bSEfwYYiclwccTO2kJPpbYSU3wccROeoKPIXZKEPx9YqcMwd8jdkoR/HVipxzBXyN2ShL8eWKnLMGfI3ZKE/xxYqc8wR8jdloQ/Htipw3BvyZ2WhH8c2KnHcGPJ3bSEPxYYicVwY8jdtIR/BhiJyXBxxM7aQk+lthJTfBxxE56gn/uTMBipwTBv3YkZLFTxi9pJ/X1WqyeIgAAAABJRU5ErkJggg==' />",
      prevLabel: "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAD8CAYAAABTq8lnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTExLTEyVDIxOjUwOjQyKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMS0xMlQyMjoyMzoyNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMS0xMlQyMjoyMzoyNiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJiZjBhODktYWJlMC0zMDRiLThjN2MtNDdkNWY3ZmVhNTMzIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzMzMzdiOTYtNmQwYi0xMTRkLWEyMjAtMDM5ZTM0MjY0Y2IxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzQ3ZjYzMTktMGNhZi1hYjQzLTk3N2UtM2VkMjI1Zjg5NzZmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNDdmNjMxOS0wY2FmLWFiNDMtOTc3ZS0zZWQyMjVmODk3NmYiIHN0RXZ0OndoZW49IjIwMTktMTEtMTJUMjE6NTA6NDIrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDNhZGY4YmItNGViNy00MTRhLThjYmYtNjFmOTQ5ZTk5ODM1IiBzdEV2dDp3aGVuPSIyMDE5LTExLTEyVDIyOjExOjM5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyYmYwYTg5LWFiZTAtMzA0Yi04YzdjLTQ3ZDVmN2ZlYTUzMyIgc3RFdnQ6d2hlbj0iMjAxOS0xMS0xMlQyMjoyMzoyNiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pltn0tkAAAW6SURBVHic7dpJkhw2DABByv//s3ywpVFrem8uWDJfgAOLiGDwx8+fPwck8ujA/tgyRVL/nB4AXvDMdrLB7hA8WbwSsuhvEDwZCHgSwROd2CcSPJGJfTLBE5XYFxA8EYl9EcETjdgXEjyRiH0xwRPFzNj9trtB8EQg9k0Ez2li30jwnCT2zQTPKWI/QPCcIPZDBM9uYj9I8Owk9sMEzy5iD0Dw7CD2IATPamIPRPCsJPZgBM8qYg9I8Kwg9qAEz2xiD0zwzCT24ATPLGJPQPDMIPYkBM+nxJ6I4PmE2JMRPO8Se0KC5x1iT0rwvErsiQmeV4g9OcHzLLEXIHieIfYiBM8jYi9E8Nwj9mIEzy1iL0jwXCP2ogTP38RemOD5k9iLEzy/iL0BwTOG2NsQPGJvRPC9ib0Zwfcl9oYE35PYmxJ8P2JvTPC9iL05wfchdgTfhNgZYwi+A7Hzm+BrEzsXBF+X2PlG8DWJnasEX4/YuUnwtYiduwRfh9h5SPA1iJ2nCD4/sfM0wecmdl4i+LzEzssEn5PYeYvg8xE7bxN8LmLnI4LPQ+x8TPA5iJ0pBB+f2JlG8LGJnakEH5fYmU7wMYmdJQQfj9hZRvCxiJ2lBB+H2FlO8DGInS0Ef57Y2UbwZ4mdrQR/jtjZTvBniJ0jBL+f2DlG8HuJnaMEv4/YOU7we4idEAS/ntgJQ/BriZ1QBL+O2AlH8GuInZAEP5/YCUvwc4md0AQ/j9gJT/BziJ0UBP85sZOG4D8jdlIR/PvETjqCf4/YSUnwrxM7aQn+NWInNcE/T+ykJ/jniJ0SBP+Y2ClD8PeJnVIEf5vYKUfw14mdkgT/ndgpS/CXxE5pgv8idsoT/H/ETguCFzuNdA9e7LTSOXix007X4MVOSx2DFzttdQte7LTWKXix016X4MUOo0fwYof/VQ9e7PCHysGLHf5SNXixwxUVgxc73FAteLHDHZWCFzs8UCn4WcROWYK/JHZKE/wXsVOe4KERwX+Z+egHIQn+kugpTfDfiZ6yKgU/89FN9JRUKfgxRA93VQt+DNHDTRWDH0P0cFXV4McQPXxTOfgxRA8Xqgc/hujhtw7BjyF6GGP0CX4M0UOr4McQPc11C34M0dNYx+DHED1NdQ1+DNHTUOfgxxA9zXQPfgzR04jg/yN6WhD8F9FTnuAviZ7SBP+d6ClL8NeJnpIEf5voKUfw94meUgT/mOgpQ/DPET0lCP55oic9wb9G9KQm+NeJnrQE/x7Rk5Lg3yd60hH8Z0RPKoL/nOhJQ/BziJ4UBD+P6AlP8HOJntAEP5/oCUvwa4iekAS/jugJR/BriZ5QBL+e6AlD8HuInhAEv4/oOU7we4meowS/n+g5RvBniJ4jBH+O6NlO8GeJnq0Ef57o2UbwMYieLQQfh+hZTvCxiJ6lBB+P6FlG8DGJniUEH5fomU7wsYmeqQQfn+iZRvA5iJ4pBJ+H6PmY4HMRPR8RfD6i522Cz0n0vEXweYmelwk+N9HzEsHnJ3qeJvgaRM9TBF+H6HlI8LWInrsEX4/ouUnwNYmeqwRfl+j5RvC1iZ4Lgq9P9Pwm+B5EzxhD8J2IHsE3I/rmBN+P6BsTfE+ib0rwfYm+IcH3JvpmBI/oGxE8Y4i+DcHzi+gbEDx/En1xgudvoi9M8Fwj+qIEzy2iL0jw3CP6YgTPI6IvRPA8Q/RFCJ5nib4AwfMK0ScneF4l+sQEzztEn5TgeZfoExI8nxB9MoLnU6JPRPDMIPokBM8sok9A8Mwk+uAEz2yiD0zwrCD6oATPKqIPSPCsJPpgBM9qog9E8Owg+iAEzy6iD0Dw7CT6wwTPbqI/SPCcIPpDBM8poj9A8Jwk+s0Ez2mi30jwRCD6TQRPFKLfQPBEMjN6rhA80Yh+IcETkegXETxRiX4BwROZ6CcTPNGJfiLBk4HoJxE8WbwSvQviBsGTyTMhi/2OfwHcnPX1gmVKMQAAAABJRU5ErkJggg==' />",
    };
  },
  methods: {
    navclick() {
      console.log('nav click');
    },
    pagclick() {
      console.log('pag click');
    },
    slideclick() {
      console.log('slide change');
    },
  },
};
</script>
