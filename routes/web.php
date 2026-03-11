<?php

use App\Http\Controllers\FrontEnd\DownloadCVController;
use Illuminate\Support\Facades\Route;

Route::get('/cv/telecharger', [DownloadCVController::class, 'download'])->name('cv.download');

Route::view('/{any}', 'app')->where('any', '.*');
