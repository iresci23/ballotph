<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('election_year') }}
            {{ Form::text('election_year', $positionCandidate->election_year, ['class' => 'form-control' . ($errors->has('election_year') ? ' is-invalid' : ''), 'placeholder' => 'Election Year']) }}
            {!! $errors->first('election_year', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('position_id') }}
            {{ Form::text('position_id', $positionCandidate->position_id, ['class' => 'form-control' . ($errors->has('position_id') ? ' is-invalid' : ''), 'placeholder' => 'Position Id']) }}
            {!! $errors->first('position_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('candidate_id') }}
            {{ Form::text('candidate_id', $positionCandidate->candidate_id, ['class' => 'form-control' . ($errors->has('candidate_id') ? ' is-invalid' : ''), 'placeholder' => 'Candidate Id']) }}
            {!! $errors->first('candidate_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('ballot_number') }}
            {{ Form::text('ballot_number', $positionCandidate->ballot_number, ['class' => 'form-control' . ($errors->has('ballot_number') ? ' is-invalid' : ''), 'placeholder' => 'Ballot Number']) }}
            {!! $errors->first('ballot_number', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('party') }}
            {{ Form::text('party', $positionCandidate->party, ['class' => 'form-control' . ($errors->has('party') ? ' is-invalid' : ''), 'placeholder' => 'Party']) }}
            {!! $errors->first('party', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('province_id') }}
            {{ Form::text('province_id', $positionCandidate->province_id, ['class' => 'form-control' . ($errors->has('province_id') ? ' is-invalid' : ''), 'placeholder' => 'Province Id']) }}
            {!! $errors->first('province_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('city_id') }}
            {{ Form::text('city_id', $positionCandidate->city_id, ['class' => 'form-control' . ($errors->has('city_id') ? ' is-invalid' : ''), 'placeholder' => 'City Id']) }}
            {!! $errors->first('city_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('district_id') }}
            {{ Form::text('district_id', $positionCandidate->district_id, ['class' => 'form-control' . ($errors->has('district_id') ? ' is-invalid' : ''), 'placeholder' => 'District Id']) }}
            {!! $errors->first('district_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>