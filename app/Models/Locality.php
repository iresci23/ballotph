<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Locality
 *
 * @property $id
 * @property $region
 * @property $province
 * @property $city_dist
 * @property $created_at
 * @property $updated_at
 *
 * @property PositionCandidate[] $positionCandidates
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Locality extends Model
{
    
    static $rules = [
		'region' => 'required',
		'province' => 'required',
		'city_dist' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['region','province','city_dist'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function positionCandidates()
    {
        return $this->hasMany('App\Models\PositionCandidate', 'locality_id', 'id');
    }
    

}
