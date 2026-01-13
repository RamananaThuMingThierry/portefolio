<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public function index()
    {
        return view('frontend.index');
    }
}
