<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontEnd\BaseController;
use App\Http\Controllers\FrontEnd\ContactController;
use App\Http\Controllers\FrontEnd\DownloadCVController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [BaseController::class, 'index'])->name('acceuil');

Route::get('/cv/telecharger',[DownloadCVController::class, 'download'])->name('cv.download');

Route::get('/contact', function () {
    return redirect('/#contact');
})->name('contact');

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
