"use strict";const collapsableImg=document.getElementsByClassName("collapsable__icon-more"),itemPeriodicTable=document.getElementById("collapsable--show");console.log(itemPeriodicTable.classList.contains("hide")),itemPeriodicTable.classList.contains("hidden")?(console.log("borro hide"),itemPeriodicTable.classList.remove("hidden")):(console.log("pongo hide"),itemPeriodicTable.classList.add("hidden"));