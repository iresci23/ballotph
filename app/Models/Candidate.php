<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Candidate
 *
 * @property $id
 * @property $name
 * @property $profile_url
 * @property $created_at
 * @property $updated_at
 *
 * @property PositionCandidate[] $positionCandidates
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Candidate extends Model
{
    
    static $rules = [
		'name' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name','profile_url'];
    

}
