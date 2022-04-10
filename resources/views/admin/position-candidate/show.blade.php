@extends('layouts.app')

@section('template_title')
    {{ $positionCandidate->name ?? 'Show Position Candidate' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Position Candidate</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('position-candidates.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Election Year:</strong>
                            {{ $positionCandidate->election_year }}
                        </div>
                        <div class="form-group">
                            <strong>Position Id:</strong>
                            {{ $positionCandidate->position_id }}
                        </div>
                        <div class="form-group">
                            <strong>Candidate Id:</strong>
                            {{ $positionCandidate->candidate_id }}
                        </div>
                        <div class="form-group">
                            <strong>Ballot Number:</strong>
                            {{ $positionCandidate->ballot_number }}
                        </div>
                        <div class="form-group">
                            <strong>Party:</strong>
                            {{ $positionCandidate->party }}
                        </div>
                        <div class="form-group">
                            <strong>Province Id:</strong>
                            {{ $positionCandidate->province_id }}
                        </div>
                        <div class="form-group">
                            <strong>City Id:</strong>
                            {{ $positionCandidate->city_id }}
                        </div>
                        <div class="form-group">
                            <strong>District Id:</strong>
                            {{ $positionCandidate->district_id }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
