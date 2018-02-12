<template>
    <div>
        <div class="dropdown-button">
            <div @click="changeOptionsVisibility" class="dropdown-selector">
                <input class="dropdown-input" placeholder="State" readonly v-model="selected">
                <div class="icon-rotate" v-bind:class="{ 'rotate': isRotated }">
                    <i class="fa fa-caret-down" ></i>
                </div>
            </div>
            <transition name="fade">
                <div class="dropdown-options" v-if="show">
                    <ul>
                        <li @click="selectState(state.value)" class="dropdown-option" v-for="state in states" :key="state.id">
                            {{ state.value }}
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DropDownA',
    data () {
        return {
            show: false,
            selected: '',
            states: [],
            isRotated: false
        }
    },
    // Getting data from states.json
    created () {
        fetch('http://localhost:3000/states')
            .then(response => response.json())
            .then(json => {
                this.states = json
            })
    },
    methods: { 
        // Sets show's value to true or false. When true, the dropdown options will be displayed. When false, options will be colapsed.
        // Also calls rotate function for rotating the caret.
        changeOptionsVisibility(){
            this.show = !this.show;
            this.rotate();
        },
        // Populates the array of states selected and colapse the dropdown options
        selectState(state){
            this.selected = state;
            this.changeOptionsVisibility();
        },
        //Rotates the caret 180 degrees
        rotate(){
            this.isRotated = !this.isRotated
        }
    }
}
</script>
<style scoped>
    .dropdown-button {
        position: relative;
        vertical-align: middle;
        border: 1px solid #af9f9f;
        background-color: transparent;
        border-radius: 5px;
        transition: .15s all ease-in-out;
    }
    .dropdown-button:hover {
        cursor: pointer;
        border: 1px solid #78c0f0;
        transform: scale(1.05);
    }
    .dropdown-selector {
        display: flex;
        justify-content: space-between;
        padding: 10px 10px 10px 10px;
    }
    .dropdown-options {
        overflow-y: auto;
        height:350px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.25s ease-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .dropdown-input {
        border: none;
        background: transparent;
        width: 100%;
        cursor: pointer;
        &:focus {
            outline:none;
        }
    }
    .dropdown-input::placeholder{
        color:#af9f9f;
    }
    ul {
        list-style-type: none;
        -webkit-padding-start: 0;
        padding: 0px !important;
    }
    li {
        padding: 10px 10px 10px 10px;
        position: relative;
        border-top: 1px solid #dfdcdc;
        text-align: left;
    }
    li:hover {
        background-color: #78c0f0;
    }
    .rotate {
        transform: rotate(180deg);
        transform-origin: 50% 50%;
    }
    .icon-rotate {
        transition: 500ms all ease-in-out;
        display: inline-table;
    }
</style>