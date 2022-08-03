<template>
<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
   
    <template v-if="type === 'xlsx'">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
        <path d="M8 11h8v7h-8z"></path>
        <path d="M8 15h8"></path>
        <path d="M11 11v7"></path>
    </template>

    <template v-if="type === 'pdf'">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
        <line x1="9" y1="9" x2="10" y2="9"></line>
        <line x1="9" y1="13" x2="15" y2="13"></line>
        <line x1="9" y1="17" x2="15" y2="17"></line>
    </template>


    <template v-if="type === 'next'">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="15" y1="16" x2="19" y2="12"></line>
        <line x1="15" y1="8" x2="19" y2="12"></line>
    </template>

 <template v-if="type === 'down'">
 <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
 </template>
 
  <template v-if="type === 'up'">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </template>

  <template v-if="type === 'right'">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</template>


  <template v-if="type === 'note'">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</template>

  

</svg>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
}
</script>