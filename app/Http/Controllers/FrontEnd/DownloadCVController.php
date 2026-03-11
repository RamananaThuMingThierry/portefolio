<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;

class DownloadCVController extends Controller{

    public function download(){
        $path = public_path('cv/RAMANANA_Thu_Ming_Thierry.pdf');

        abort_unless(file_exists($path), 404);

        return response()->download($path, 'RAMANANA_Thu_Ming_Thierry.pdf');
    }
}