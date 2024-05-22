<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Livewire\Products\Index::class);
Route::get('/create', \App\Livewire\Products\Create::class)->name('create.product');
