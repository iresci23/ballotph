<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class PositionCandidate
 *
 * @property $id
 * @property $election_year
 * @property $position_id
 * @property $candidate_id
 * @property $ballot_number
 * @property $party
 * @property $province_id
 * @property $city_id
 * @property $district_id
 * @property $created_at
 * @property $updated_at
 *
 * @property Candidate $candidate
 * @property City $city
 * @property District $district
 * @property Position $position
 * @property Province $province
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class PositionCandidate extends Model
{
    
    static $rules = [
		'election_year' => 'required',
		'position_id' => 'required',
		'candidate_id' => 'required',
		'ballot_number' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['election_year','position_id','candidate_id','ballot_number','party','province_id','city_id','district_id'];


    protected static function booted()
    {
        static::addGlobalScope('electionYear', function (Builder $builder) {
            $builder->where('election_year', config('election.year', 2022));
        });
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function candidate()
    {
        return $this->belongsTo('App\Models\Candidate', 'id', 'candidate_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function city()
    {
        return $this->belongsTo('App\Models\City', 'id', 'city_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function district()
    {
        return $this->belongsTo('App\Models\District', 'id', 'district_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function position()
    {
        return $this->belongsTo('App\Models\Position', 'id', 'position_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function province()
    {
        return $this->belongsTo('App\Models\Province', 'id', 'province_id');
    }
}