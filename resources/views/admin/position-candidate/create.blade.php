@extends('layouts.app')

@section('template_title')
    Create Position Candidate
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">

                @includeif('partials.errors')

                <div class="card card-default">
                    <div class="card-header">
                        <span class="card-title">Create Position Candidate</span>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('position-candidates.store') }}"  role="form" enctype="multipart/form-data">
                            @csrf

                            @include('position-candidate.form')

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
