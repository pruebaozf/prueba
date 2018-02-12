<template>
    <div>
        <div class="dropdown-button" v-bind:class="{ 'active': active }">
            <div class="dropdown-selector" @click="setActive">
                <div>
                    <div class="selection-all">
                        <div class="selection-wrap" v-for="selected in array_selected">
                            <div class="selection">
                                {{ selected.value }}
                                <span class="icon" @click="removeSelected(selected)">
                                    <i class="fas fa-times icon-spin"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="changeOptionsVisibility" class="icon-rotate" v-bind:class="{ 'rotate': show }">
                    <i class="fa fa-caret-down" ></i>
                </div>
            </div>
            <transition name="fade">
                <div class="dropdown-options" v-if="show">
                    <ul>
                        <li @click="selectState(state)" class="dropdown-option" v-for="state in filteredStates">
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
    name: 'DropDownC',
    data () {
        return {
            show: false,
            selected: '',
            array_selected: [],
            states: [],
            active: false,
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
    computed: {
        // The list of states available to select will be updated dinamically. It will only show those states that hasn't been selected.
        filteredStates:function(){
            var self=this;
            return this.states.filter(function(state){
                if (self.array_selected.indexOf(state)==-1){
                    return state;
                }
            });
        }
    },
    methods: {
        // Method for setting the value of "active" to true or false. In case that active==false it will call method changeOptionsVisibility
        // In case var show==false, will be switching active's value.
        // This method helps to avoid colapsing the the dropdown options when clicking in any part of the whole selector box (except for the caret)
        setActive(){
            if (!this.active){
                this.changeOptionsVisibility();
                this.active = !this.active;
            }
            if (!this.show){
                this.active = !this.active;
            }
        },
        // Sets show's value to true or false. When true, the dropdown options will be displayed. When false, options will be colapsed.
        changeOptionsVisibility(){
            this.show = !this.show;
        },
        // Populates the array of states selected
        selectState(state){
            this.array_selected.push(state);
        },
        // Removes the state of the array "array_selected"
        removeSelected(state){
            this.array_selected.splice(this.array_selected.indexOf(state),1);
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
        cursor: pointer;
    }
    .dropdown-button.active{
        cursor:auto;
    }
    .dropdown-button:hover {
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
        max-height:350px;
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
        outline:none
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
        cursor: pointer;
    }
    .selection {
        display: inline-block;
        padding: 1px 12px;
        background: #dfdcdc;
        margin-right: 8px;
        margin-bottom: 8px;
        border-radius: 5px;
        border: 1px solid #999999;
    }
    .icon {
        width: 10px;
        color: #aaa5a5;
        margin-left: 5px;
        margin-right: 5px;
        font-weight: bolder;
        cursor: pointer;
    }
    .fas {
        cursor: pointer;
    }
    .selection-all{
        display: flex;
        flex-wrap: wrap;
    }
    .selection-wrap {
        display: inline;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }
    .icon-spin:hover {
        animation: spin 500ms linear;
        color: red;
    }
    .rotate {
        transform: rotate(180deg);
        transform-origin: 50% 50%;
    }
    .icon-rotate {
        display: inline-table;
        transition: 500ms all ease-in-out;
        cursor: pointer;
    }
</style>
