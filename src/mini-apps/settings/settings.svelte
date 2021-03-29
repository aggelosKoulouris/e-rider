<script>
  import { appLang } from '../../stores/settings'

  let language = $appLang
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<select bind:value="{$appLang}">
  <option value="el-GR">Ελληνικά</option>
  <option value="en-US">Αγγλικά</option>
</select>