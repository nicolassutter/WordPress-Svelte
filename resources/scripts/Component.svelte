<script>
  import { onMount } from 'svelte';
  import { getData } from './utilities'

  /**
   * The prop that gives us access to the element the component in rendered in
   * It is passed in the app.js file
   */
  export let component

  /**
   * The content of the post
   */
  let post = null

  onMount(() => {
    /**
     * If counter does existe when get the data from WP in the data-post attribute (We set this attribute in index.php)
     */
    if (component) post = getData(component, 'post')
  })
</script>

{ #if post }
<article>
  <h2>{post.post_title}</h2>
  {@html post.post_content}
</article>
{ /if }
