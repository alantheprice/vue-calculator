<template>
    <div class="flex__column calc__container">
        <input class="calc__input" type="text" v-model="display">
        <div class="calc flex__row">
            <numpad @on-value-clicked="onValueClicked" :numpad="numpad"></numpad>
            <operators  @on-value-clicked="onValueClicked" :operators="operators"></operators>
        </div>
    </div>
</template>

<script src="calcImp.js"></script>
