<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller {

    public function getIndex() {
       return view('pages.welcome');
    }

    public function getAbout() {
        $first = "Josef";
        $last = "Hruby";
        $fullname = $first.' '.$last;
        return view('pages.about')->withFullname($fullname);
    }

    public function getContact() {
       return view('pages.contact');
    }

    public function postContact() {
        
    }

}
