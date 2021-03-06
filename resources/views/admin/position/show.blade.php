@extends('layouts.app')

@section('template_title')
    {{ $position->name ?? 'Show Position' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Position</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('positions.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Slug:</strong>
                            {{ $position->slug }}
                        </div>
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $position->name }}
                        </div>
                        <div class="form-group">
                            <strong>Type:</strong>
                            {{ $position->type }}
                        </div>
                        <div class="form-group">
                            <strong>Voting Limit:</strong>
                            {{ $position->voting_limit }}
                        </div>
                        <div class="form-group">
                            <strong>Order:</strong>
                            {{ $position->order }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
