<style scoped>
tr {
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
}

tr > td {
  padding: 0.25em;
}

.measure-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.is-not-pbo-costing {
  color: #888;
}

.warning-button {
  margin-left: 0.5em;
  color: #754043;
  cursor: pointer;
}
.warning-button:hover,
.warning-button:active {
  color: #915053;
}

.note-button {
  margin-left: 0.5em;
  color: #315470;
  cursor: pointer;
}
.note-button:hover,
.note-button:active {
  color: #0582ca;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
}
</style>
<template>
  <tr class="covidcostings-row" :class="{'is-not-pbo-costing': !costing.isPboCosting}" @click="log">
    <td>
      <div class="measure-name flex flex-row items-center">
        <qs-pbo-costed-glyph v-if="costing.isPboCosting" />
        <div>
          <component
            :is="currentCostingUrl ? 'a' : 'span'"
            :href="currentCostingUrl"
            target="_blank"
            :class="{'underline' : currentCostingUrl, 'text-blue-700':currentCostingUrl, 'hover:text-blue-900':currentCostingUrl, }"
          >{{ costing['title_' + $root.language] }}</component>

          <div v-if="comparedCostingUrl">
            <small class="archived">
              <a
                :href="comparedCostingUrl"
                target="_blank"
                class="font-thin"
              >{{ $root.strings.fullcostings.read_previous_pdf }}</a>
            </small>
          </div>
        </div>

        <div
          v-if="warning"
          class="warning-button"
          role="button"
          :active="displayWarning"
          :aria-pressed="displayWarning"
          :aria-label="$root.strings.fullcostings.display_warning"
          @click="displayWarning=!displayWarning"
        >
          <list-view-item-icon type="down" v-if="!displayWarning" class="ml-2 bg-blue-100 rounded-sm hover:bg-blue-200 px-1 h-4 w-6"></list-view-item-icon>
          <list-view-item-icon type="up" v-if="displayWarning" class="ml-2 bg-blue-100 rounded-sm hover:bg-blue-200 px-1  h-4 w-6"></list-view-item-icon>
        </div>

        <div
          v-if="note"
          class="note-button"
          role="button"
          :active="displayNote"
          :aria-pressed="displayNote"
          :aria-label="$root.strings.fullcostings.display_note"
          @click="displayNote=!displayNote"
        >
        <list-view-item-icon type="note"  v-if="!displayNote" class="ml-2 bg-blue-100 rounded-sm hover:bg-blue-200 px-1 h-4 w-6"></list-view-item-icon>
        <list-view-item-icon type="note" v-if="displayNote" class="ml-2 text-white bg-blue-800 rounded-sm hover:bg-blue-700 px-1 h-4 w-6"></list-view-item-icon>

        </div>

        <template v-if="shouldShowStatusBadges">
          <costing-badge v-if="costing.isNew">{{ $root.strings.fullcostings.new }}</costing-badge>
          <costing-badge
            v-if="costing.hasUpdatedArtifact"
          >{{ $root.strings.fullcostings.updated_artifact }}</costing-badge>
          <costing-badge
            v-if="costing.hasUpdatedNumbers"
          >{{ $root.strings.fullcostings.updated_numbers }}</costing-badge>
        </template>
      </div>

      <transition name="fade">
        <qs-costings-note v-if="displayWarning" :note="warning"></qs-costings-note>
      </transition>
      <transition name="fade">
        <qs-costings-note v-if="displayNote" :note="note"></qs-costings-note>
      </transition>
    </td>

    <template v-if="!shouldAppearAsOtherCosting">
      <td
        v-for="(value, key) in currentCostingUpdate.numbers"
        :key="'curr_'+key"
        style="width: 10%;text-align:right"
      >
        <costings-number :value="value" />
      </td>

      <template v-if="compareWithUpdate">
        <td
          class="comparative-cell"
          v-for="(value, key) in compareWithUpdate.numbers"
          style="width: 10%;text-align:right"
          :key="'comp_'+key"
        >
          <costings-number :value="value" />
        </td>
      </template>
      <template v-if="!compareWithUpdate && $root.compareWithUpdate">
        <td class="comparative-cell" style="width: 10%;text-align:right">N/A</td>
        <td class="comparative-cell" style="width: 10%;text-align:right">N/A</td>
      </template>
    </template>
  </tr>
</template>
<script>
import QsPboCostedGlyph from "./QsPboCostedGlyph.vue"
import QsCostingsNote from "./QsCostingsNote.vue"
import CostingBadge from "./CostingBadge.vue"

import collect from "collect.js";
import ListViewItemIcon from "../ListViewItemIcon.vue";
export default {
  components: {
    QsPboCostedGlyph,
    QsCostingsNote,
    CostingBadge,
    ListViewItemIcon
},
  props: {
    costing: {
      type: Object,
      required: true,
    },
    displayAsOfLatestScenario: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      displayNote: false,
      displayWarning: false,
    };
  },
  methods: {
    log() {
      console.log(this.costing.currentCostingUpdate);
    },
  },
  
  computed: {
    shouldShowStatusBadges() {
      // Only show status badges for pending, simple and other costings AND full table but only when current scenario is the latest update.
      return (
        !this.displayAsOfLatestScenario ||
        this.$root.currentUpdate.id === this.$root.currentGhostUpdateId
      );
    },
    shouldAppearAsOtherCosting() {
      return this.costing.no_incremental_impact && !this.$root.search.query;
    },
    currentCostingUpdate() {
      if (this.displayAsOfLatestScenario) {
        return this.costing.updateWithId(this.$root.currentUpdate.id);
      }
      return this.costing.currentCostingUpdate;
    },
    currentCostingUrl() {
      return this.currentCostingUpdate.id
        ? `https://www.pbo-dpb.gc.ca/web/default/files/Documents/LEG/${this.currentCostingUpdate.id}/${this.currentCostingUpdate.id}_${this.$root.language}.pdf`
        : null;
    },
    comparedCostingUrl() {
      if (
        !this.currentCostingUpdate.id ||
        !this.compareWithUpdate ||
        !this.compareWithUpdate.id
      ) {
        return null;
      }
      return this.currentCostingUpdate.id === this.compareWithUpdate.id
        ? null
        : `https://www.pbo-dpb.gc.ca/web/default/files/Documents/LEG/${this.compareWithUpdate.id}/${this.compareWithUpdate.id}_${this.$root.language}.pdf`;
    },
    compareWithUpdate() {
      return this.$root.compareWithUpdate
        ? collect(this.costing.costing_updates).firstWhere(
            "update_id",
            this.$root.compareWithUpdate.id
          )
        : null;
    },
    note() {
      return this.costing["note_" + this.$root.language];
    },
    warning() {
      return this.costing["warning_" + this.$root.language];
    },
  },
};
</script>