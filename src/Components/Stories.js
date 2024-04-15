import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
function Stories() {
  return (
    <div class="relative max-w-xl mx-auto mt-20">
    <img class="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-3xl font-bold">Get Lost in Mountains</h2>
    </div>
</div>
  )
}

export default Stories