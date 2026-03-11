<?php

use App\Http\Controllers\FrontEnd\BaseController;
use App\Http\Controllers\FrontEnd\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BaseController::class, 'index'])->name('acceuil');


Route::get('/contact', function () {
    return redirect('/#contact');
})->name('contact');

Route::post('/contact/send', [ContactController::class, 'send'])->name('contact.send');
