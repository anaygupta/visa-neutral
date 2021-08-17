        
<template>
    <div class="flex flex-col items-center">
        <div class="m-4 p-5 flex flex-col w-full md:w-5/6 lg:w-3/4 bg-white shadow-md rounded-md border-2 border-black border-opacity-10">
            <form>
                <div class="location flex flex-rows space-x-5">
                    <div class="origin flex flex-col">
                        <label class="ml-1 font-bold" for="origin">From</label>
                        <select name="" id="origin">
                            <option value="" selected disabled hidden>Choose your origin</option>
                            <option value="Austin, TX">Austin, TX</option>
                            <option value="Foster City, CA">Foster City, CA</option>
                            <option value="Los Angeles, CA">Los Angeles, CA</option>
                            <option value="New York, NY">New York, NY</option>
                        </select>
                    </div>
                    <div class="destination flex flex-col">
                        <label class="ml-1 font-bold" for="origin">To</label>
                        <select name="" id="origin">
                            <option value="" selected disabled hidden>Choose your origin</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>