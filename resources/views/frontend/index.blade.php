@extends('app')

@section('content')
    @include('frontend.acceuil')
    @include('frontend.about')
    @include('frontend.services')
    @include('frontend.skills')
    {{-- @include('frontend.projet') --}}
    @include('frontend.contact')
    @include('frontend.footer')
@endsection
