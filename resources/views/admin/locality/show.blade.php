@extends('layouts.app')

@section('template_title')
    {{ $locality->name ?? 'Show Locality' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Locality</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('localities.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Region:</strong>
                            {{ $locality->region }}
                        </div>
                        <div class="form-group">
                            <strong>Province:</strong>
                            {{ $locality->province }}
                        </div>
                        <div class="form-group">
                            <strong>City Dist:</strong>
                            {{ $locality->city_dist }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
