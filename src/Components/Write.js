import React from 'react'

function Write() {
  return (
    <>
      <div class="max-w-2xl mx-auto p-4 shadow-lg rounded-xl">
    <form action="http://localhost:3000/submit-post" method="POST">
        <div class="mb-6">
            <label for="title" class="block text-lg font-medium text-gray-800 mb-1">Title</label>
            <input type="text" id="title" name="title" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required/>
        </div>
        <div class="mb-6">
            <label for="title" class="block text-lg font-medium text-gray-800 mb-1">Email</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required/>
        </div>
        

        <div class="mb-6">
            <label for="content" class="block text-lg font-medium text-gray-800 mb-1">Content</label>
            <textarea id="content" name="content" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="6" required></textarea>
        </div>

        <div class="mb-6">
            <label for="image" class="block text-lg font-medium text-gray-800 mb-1">Image</label>
            <input type="file" id="image" name="image" accept="image/*" class="w-full"/>
        </div>

        <div class="flex justify-end">
            <button type="submit" class="px-6 py-2 bg-purple-500 text-black font-semibold rounded-md hover:bg-purple-600 focus:outline-none">Submit</button>
        </div>
    </form>

</div>
    </>
  )
}

export default Write
