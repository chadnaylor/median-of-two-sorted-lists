/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = Math.ceil(nums1.length / 2)
    let j = Math.ceil(nums2.length / 2)
    let halfTotalLength = Math.floor((nums1.length + nums2.length) / 2)
    let iStep = Math.max(1, Math.ceil(i / 2)), jStep = Math.max(1, Math.ceil(j / 2))

    let returnAnswer = () => {
        if ((nums1.length + nums2.length) / 2 > (i + j)) {
            if (!nums1.length) return nums2[j]
            else if (!nums2.length) return nums1[i]
            else if (i === nums1.length) {
                return nums2[j]
            } else if (j === nums2.length) {
                return nums1[i]
            }
            else if (nums1[i] <= nums2[j]) return nums1[i]
            else return nums2[j]
        } else {
            let upper, lower
            if (i === nums1.length) {
                upper = nums2[j]
            } else if (j === nums2.length) {
                upper = nums1[i]
            } else {
                upper = Math.min(nums1[i], nums2[j])
            }
            if (j === 0) {
                lower = nums1[i - 1]
            } else if (i === 0) {
                lower = nums2[j - 1]
            } else {
                lower = Math.max(nums1[i - 1], nums2[j - 1])
            }
            return (upper + lower) / 2
        }
    }

    while (true) {
        if (i + j < halfTotalLength) {
            if (j < nums2.length && i < nums1.length) {
                if (nums2[j] <= nums1[i]) {
                    j += jStep
                    jStep = Math.ceil(jStep / 2)
                } else if (nums1[i] < nums2[j]) {
                    i += iStep
                    iStep = Math.ceil(iStep / 2)
                }
            } else if (i === nums1.length) {
                j += jStep
                jStep = Math.ceil(jStep / 2)
            } else {
                i += iStep
                iStep = Math.ceil(iStep / 2)
            }
        } else if (i + j > halfTotalLength) {
            if (i > 0 && j > 0) {
                if (nums2[j - 1] >= nums1[i - 1]) {
                    j -= jStep
                    jStep = Math.ceil(jStep / 2)
                } else if (nums2[j - 1] < nums1[i - 1]) {
                    i -= iStep
                    iStep = Math.ceil(iStep / 2)
                }
            } else if (i === 0) {
                j -= jStep
                jStep = Math.ceil(jStep / 2)
            } else {
                i -= iStep
                iStep = Math.ceil(iStep / 2)
            }
        }
        else {
            if (i === nums1.length || j === nums2.length) {
                return returnAnswer()
            }
            if (nums1[i] === nums2[j]) {
                return returnAnswer()
            }
            else if (nums2[j] > nums1[i]) {
                if (i === halfTotalLength) {
                    return returnAnswer()
                }
                else if (j > 0 && nums2[j - 1] <= nums1[i]) {
                    return returnAnswer()
                } else {
                    if (jStep >= iStep && j > 0) {
                        j -= jStep
                        jStep = Math.ceil(jStep / 2)
                    } else {
                        i += iStep
                        iStep = Math.ceil(iStep / 2)
                    }
                }
            } else if (nums2[j] < nums1[i]) {
                if (j === halfTotalLength) {
                    return returnAnswer()
                }
                if (i > 0 && nums1[i - 1] <= nums2[j]) {
                    return returnAnswer()
                } else {
                    if (iStep >= jStep && i > 0) {
                        i -= iStep
                        iStep = Math.ceil(iStep / 2)
                    } else {
                        j += jStep
                        jStep = Math.ceil(jStep / 2)
                    }
                }
            }
        }
    }

};

module.exports = { findMedianSortedArrays }