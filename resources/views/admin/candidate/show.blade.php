@extends('layouts.app')

@section('template_title')
    {{ $candidate->name ?? 'Show Candidate' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Candidate</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('candidates.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $candidate->name }}
                        </div>
                        <div class="form-group">
                            <strong>Profile Url:</strong>
                            {{ $candidate->profile_url }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
