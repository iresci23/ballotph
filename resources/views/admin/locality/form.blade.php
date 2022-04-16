<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('region') }}
            {{ Form::text('region', $locality->region, ['class' => 'form-control' . ($errors->has('region') ? ' is-invalid' : ''), 'placeholder' => 'Region']) }}
            {!! $errors->first('region', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('province') }}
            {{ Form::text('province', $locality->province, ['class' => 'form-control' . ($errors->has('province') ? ' is-invalid' : ''), 'placeholder' => 'Province']) }}
            {!! $errors->first('province', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('city_dist') }}
            {{ Form::text('city_dist', $locality->city_dist, ['class' => 'form-control' . ($errors->has('city_dist') ? ' is-invalid' : ''), 'placeholder' => 'City Dist']) }}
            {!! $errors->first('city_dist', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>